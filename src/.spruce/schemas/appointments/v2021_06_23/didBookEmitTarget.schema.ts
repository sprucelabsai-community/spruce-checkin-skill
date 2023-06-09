import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const didBookEmitTargetSchema: SpruceSchemas.Appointments.v2021_06_23.DidBookEmitTargetSchema  = {
	id: 'didBookEmitTarget',
	version: 'v2021_06_23',
	namespace: 'Appointments',
	name: '',
	    fields: {
	            /** . */
	            'locationId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(didBookEmitTargetSchema)

export default didBookEmitTargetSchema
