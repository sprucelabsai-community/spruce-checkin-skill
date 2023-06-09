import { SpruceSchemas } from '@sprucelabs/heartwood-view-controllers'
import { Person } from '@sprucelabs/spruce-core-schemas'
import { eventFaker } from '@sprucelabs/spruce-test-fixtures'
import { generateId } from '@sprucelabs/test-utils'
import { Appointment, ListAppointment } from '../../checkin.types'

export default class EventFaker {
	private fakedPerson: SpruceSchemas.Spruce.v2020_07_22.Person

	public constructor(options: { fakedPerson: Person }) {
		this.fakedPerson = options.fakedPerson
	}

	public async fakeListAppointments(
		cb?: (
			targetAndPayload: ListAppointmentsTargetAndPayload
		) => void | SpruceSchemas.Appointments.v2021_06_23.ListAppointment[]
	) {
		await eventFaker.on(
			'appointments.list::v2021_06_23',
			(targetAndPayload) => {
				return {
					appointments: cb?.(targetAndPayload) ?? [],
				}
			}
		)
	}

	public async fakeGetAppointment(
		cb?: (
			targetAndPayload: GetAppointmentTargetAndPayload
		) => void | Appointment
	) {
		await eventFaker.on('appointments.get::v2021_06_23', (targetAndPayload) => {
			return {
				appointment:
					cb?.(targetAndPayload) ??
					this.generateListAppointmentValues({
						locationId: generateId(),
						organizationId: generateId(),
					}),
			}
		})
	}

	public async fakeUpdateAppointment(
		cb?: (targetAndPayload: UpdateAppointmentTargetAndPayload) => void
	) {
		await eventFaker.on(
			'appointments.update::v2021_06_23',
			(targetAndPayload) => {
				cb?.(targetAndPayload)
				return {
					appointment: this.generateListAppointmentValues({
						locationId: generateId(),
						organizationId: generateId(),
					}),
				}
			}
		)
	}

	public async fakeSendMessage(
		cb?: (targetAndPayload: SendMessageTargetAndPayload) => void
	) {
		await eventFaker.on('send-message::v2020_12_25', (targetAndPayload) => {
			cb?.(targetAndPayload)
			return {
				message: {
					body: generateId(),
					classification: 'auth' as const,
					dateCreated: new Date().getTime(),
					id: generateId(),
					source: {},
					target: {},
				},
			}
		})
	}

	public async fakeGenerateUrl(
		cb?: (targetAndPayload: GenerateUrlTargetAndPayload) => void | string
	) {
		await eventFaker.on(
			'heartwood.generate-url::v2021_02_11',
			(targetAndPayload) => {
				return {
					url: cb?.(targetAndPayload) ?? generateId(),
				}
			}
		)
	}

	public generateBookedServiceValues(values: {
		organizationId: string
		locationId: string
		startDateTimeMs?: number
	}) {
		const { organizationId, locationId, startDateTimeMs } = values

		return {
			id: generateId(),
			dateCreated: new Date().getTime(),
			organizationId,
			providerCasualName: generateId(),
			providerId: generateId(),
			serviceName: generateId(),
			startDateTimeMs: startDateTimeMs ?? new Date().getTime(),
			target: {
				appointmentId: generateId(),
				calendarEventId: generateId(),
				locationId,
				serviceId: generateId(),
			},
			durationMinutes: 30,
		}
	}

	public generateListAppointmentValues(
		values: GenerateListAppointmentValuesOptions
	): ListAppointment {
		const { locationId, totalServices = 1 } = values

		return {
			id: generateId(),
			dateCreated: new Date().getTime(),
			statuses: [],
			services: new Array(totalServices)
				.fill(0)
				.map(() => this.generateBookedServiceValues(values)),
			target: {
				locationId,
				guestId: this.fakedPerson.id,
			},
		}
	}

	public async fakeGetPerson(
		cb?: (targetAndPayload: GetPersonTargetAndPayload) => void
	) {
		await eventFaker.on('get-person::v2020_12_25', (targetAndPayload) => {
			return {
				person: cb?.(targetAndPayload) ?? this.fakedPerson,
			}
		})
	}

	public async fakeCheckin(
		cb?: (targetAndPayload: CheckinTargetAndPayload) => void
	) {
		await eventFaker.on('checkin.checkin::v2023_05_07', (targetAndPayload) => {
			cb?.(targetAndPayload)
			return {
				providerName: 'Test Provider',
			}
		})
	}
}

export type ListAppointmentsTargetAndPayload =
	SpruceSchemas.Appointments.v2021_06_23.ListEmitTargetAndPayload

export interface GenerateListAppointmentValuesOptions {
	organizationId: string
	locationId: string
	totalServices?: number
	startDateTimeMs?: number
	guestId?: string
}

export type GetPersonTargetAndPayload =
	SpruceSchemas.Mercury.v2020_12_25.GetPersonEmitTargetAndPayload

export type CheckinTargetAndPayload =
	SpruceSchemas.Checkin.v2023_05_07.CheckinEmitTargetAndPayload

export type SendMessageTargetAndPayload =
	SpruceSchemas.Mercury.v2020_12_25.SendMessageEmitTargetAndPayload

export type UpdateAppointmentTargetAndPayload =
	SpruceSchemas.Appointments.v2021_06_23.UpdateEmitTargetAndPayload

export type GenerateUrlTargetAndPayload =
	SpruceSchemas.Heartwood.v2021_02_11.GenerateUrlEmitTargetAndPayload

export type GetAppointmentTargetAndPayload =
	SpruceSchemas.Appointments.v2021_06_23.GetEmitTargetAndPayload
