

import { BrowserModule      	} from '@angular/platform-browser';
import { FlexLayoutModule		} from "@angular/flex-layout";
import { Injector 				} from '@angular/core';
import { NgModule				} from '@angular/core';
import { createCustomElement	} from '@angular/elements';

import { WejaLibraryModule	} from "weja-library";
import { MaterialModule 	} from "weja-library";
import { HelloComponent		} from "weja-library";
import { NavComponent		} from "weja-library";
import { DevHeadComponent	} from "weja-library";

@NgModule({
	imports: [
		BrowserModule,
		FlexLayoutModule,
		MaterialModule,
		WejaLibraryModule
	],
	exports: [
		FlexLayoutModule,
		MaterialModule,
		WejaLibraryModule
	],
	providers: []
})

export class AppModule {
	
	constructor( private injector: Injector ) {}
	
	ngDoBootstrap() {
		const wejaTestElement		= createCustomElement(HelloComponent,	{ injector: this.injector });
		customElements.define("weja-element-hello", wejaTestElement );
		const wejaNavElement		= createCustomElement(NavComponent,		{ injector: this.injector });
		customElements.define("weja-element-nav", wejaNavElement );
		const wejaDevHeadElement	= createCustomElement(DevHeadComponent,	{ injector: this.injector });
		customElements.define("weja-element-dev-head", wejaDevHeadElement );
	}
}
