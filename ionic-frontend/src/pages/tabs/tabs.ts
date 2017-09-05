import { Component } from '@angular/core';

import { DealsPage } from '../deals/deals';
import { ProfilePage } from '../profile/profile';
import { TrackedPage } from '../tracked/tracked';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TrackedPage;
  tab2Root = DealsPage;
  tab3Root = ProfilePage;
  tab4Root = SettingsPage;

  constructor() {

  }
}
