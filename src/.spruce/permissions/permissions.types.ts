import '@sprucelabs/mercury-types'

declare module '@sprucelabs/mercury-types/build/types/mercury.types' {
	interface PermissionContractMap {
		'checkin.checkin': [
			'can-get-guest-details','can-checkin-self',
		]
		'heartwood.skill-views': [
			'can-get-skill-views','can-register-skill-views','can-listen-to-did-register-skill-views','can-generate-url','can-get-skill-views','can-list-skill-views','can-get-dashboard-cards','can-get-active-theme','can-manage-organization-themes',
		]
		'appointments.appointments': [
			'can-hold-time','can-cancel-hold','can-book-appointment','can-create-appointment','can-list-appointments','can-list-appointments-for-others','can-update-appointment',
		]
		'appointments.management': [
			'can-configure-people-capabilities','can-configure-role-capabilities','can-register-capabilities',
		]
		'appointments.createCategoryEmitPermissions': [
			'can-create-category',
		]
		'appointments.createServiceEmitPermissions': [
			'can-create-service',
		]
		'appointments.deleteCategoryEmitPermissions': [
			'can-delete-category',
		]
		'appointments.deleteServiceEmitPermissions': [
			'can-delete-service',
		]
		'appointments.getEmitPermissions': [
			'can-get-appointment',
		]
		'appointments.getAvailableTimesEmitPermissions': [
			'can-get-available-times',
		]
		'appointments.getCategoryEmitPermissions': [
			'can-get-category',
		]
		'appointments.getOrganizationSettingsEmitPermissions': [
			'can-get-organization-settings',
		]
		'appointments.listBookedServicesEmitPermissions': [
			'can-list-booked-services',
		]
		'appointments.getServiceEmitPermissions': [
			'can-get-service',
		]
		'appointments.listCategoriesEmitPermissions': [
			'can-list-categories',
		]
		'appointments.listPeopleCapabilitiesEmitPermissions': [
			'can-list-people-capabilities',
		]
		'appointments.listRoleCapabilitiesEmitPermissions': [
			'can-list-role-capabilities',
		]
		'appointments.listServicesWithProvidersEmitPermissions': [
			'can-list-services-with-providers',
		]
		'appointments.listServicesEmitPermissions': [
			'can-list-services',
		]
		'appointments.listStatusesEmitPermissions': [
			'can-list-statuses',
		]
		'appointments.syncStatusesEmitPermissions': [
			'can-high-five',
		]
		'appointments.updateCategoryEmitPermissions': [
			'can-edit-category',
		]
		'appointments.updateOrganizationSettingsEmitPermissions': [
			'can-save-org-settings',
		]
		'appointments.updateServiceEmitPermissions': [
			'can-edit-service',
		]
		'appointments.willSendConfirmationListenPermissions': [
			'can-listen-to-will-send',
		]
	}
}


export interface PermissionContractMap {}