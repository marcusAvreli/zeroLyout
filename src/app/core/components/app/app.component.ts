declare var require: any
import {Component, ViewEncapsulation} from '@angular/core';
import {
  ActivatedRoute,
  Event as RouterEvent, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router
} from '@angular/router';
//import {Store} from '@ngrx/store';

//import * as layoutActions from '../../actions/layout';
//import * as systemActions from '../../actions/system';
import * as reducers from '../../reducers';
import * as models from '../../models';

//import {Observable} from 'rxjs/Observable';
//import 'rxjs/add/operator/take';
//import * as services from '../../services';
//import * as  userServiceDataContracts from '../../services/user/contracts/data-contracts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
//src/app/core/components/app
export class AppComponent {
  //public isAppView$: Observable<boolean>;
  //public isFullHeightView$: Observable<boolean>;
  //public isLoading$: Observable<boolean>;
	public user$: Observable<models.User>;

  constructor(/*private router: Router,
              private activatedRoute: ActivatedRoute,*/
              private store: Store<any>
              /*private userService: services.UserService*/) {
				 
		this.user$ = this.store.select(reducers.getUserUser);
  
	}

   
  public closeSidenav(): void {
    // this.store.dispatch(new layoutActions.CloseSidenavAction());
  }

  public openSidenav(): void {
    // this.store.dispatch(new layoutActions.OpenSidenavAction());
  }

  public signOut(): void {
    /*this.userService.signOut(new userServiceDataContracts.SignOutRequest())
      .take(1)
      .subscribe(() => {
        location.reload();
      });*/
  }
}