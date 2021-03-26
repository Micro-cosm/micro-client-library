

import { NgModule					} from '@angular/core';
import { MatMenuModule				} from '@angular/material/menu';
import { MatToolbarModule			} from '@angular/material/toolbar';
import { MatButtonModule			} from '@angular/material/button';
import { MatButtonToggleModule		} from '@angular/material/button-toggle';
import { MatCardModule				} from '@angular/material/card';
import { MatCheckboxModule			} from '@angular/material/checkbox';
import { MatIconModule				} from '@angular/material/icon';
import { MatInputModule				} from '@angular/material/input';
import { MatProgressBarModule		} from '@angular/material/progress-bar';
import { MatProgressSpinnerModule	} from '@angular/material/progress-spinner';
import { MatRippleModule			} from '@angular/material/core';
import { MatSidenavModule			} from '@angular/material/sidenav';
import { MatTreeModule				} from '@angular/material/tree';

@NgModule({
	imports: [
		MatMenuModule,
		MatToolbarModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatCardModule,
		MatCheckboxModule,
		MatIconModule,
		MatInputModule,
		MatProgressBarModule,
		MatProgressSpinnerModule,
		MatRippleModule,
		MatSidenavModule,
		MatTreeModule
	],
	exports: [
		MatMenuModule,
		MatToolbarModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatCardModule,
		MatCheckboxModule,
		MatIconModule,
		MatInputModule,
		MatProgressSpinnerModule,
		MatProgressBarModule,
		MatRippleModule,
		MatSidenavModule,
		MatToolbarModule,
		MatTreeModule
	]
})

export class MaterialModule {}
