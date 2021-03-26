

import { BrowserModule   			} from '@angular/platform-browser';
import { BrowserAnimationsModule	} from '@angular/platform-browser/animations';
import { FlexLayoutModule			} from '@angular/flex-layout';
import { NgModule        			} from '@angular/core';
import { WejaLibraryModule			} from 'weja-library';
import { MaterialModule				} from './sub-modules/material.module';

import { CUSTOM_ELEMENTS_SCHEMA		} from '@angular/core';
import { AppComponent    			} from './app.component';
import { HelloComponent				} from './hello/hello.component';

import 'hammerjs';

@NgModule({
	declarations: [
		AppComponent,
		HelloComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FlexLayoutModule,
		MaterialModule,
		WejaLibraryModule
	],
	schemas:	[CUSTOM_ELEMENTS_SCHEMA],
	bootstrap:	[AppComponent]
})

export class AppModule { }
