import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserInfo } from '../../model/userInfo'
import { RegisterPage } from '../register/register';
import { WelcomePage } from '../welcome/welcome';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    user = new UserInfo();
    constructor(public navCtrl: NavController, private afAuth: AngularFireAuth) {
    }

    async login(user: UserInfo) {
        try {
            const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
            console.log(result);
            if (result.uid) {
                this.navCtrl.setRoot(WelcomePage);
            }

        } catch (e) {
            console.log(e);
        }

    }

    register() {
        this.navCtrl.push(RegisterPage);
    }


}
