import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserInfo } from '../../model/userInfo'
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';



@IonicPage()
@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})
export class RegisterPage {

    user = new UserInfo();

    constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RegisterPage');
    }

    async register() {
        try {
            const result = await this.afAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password);
            this.navCtrl.push(HomePage);
        }
        catch (e) {
            console.log(e);
        }
    }

}
