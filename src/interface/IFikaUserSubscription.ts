export interface IFikaUserSubscription {
	user_id: String;
	user_name: String;
	team_id: String;
	channel_id: String;
	channel_name: String;

	// user subscription preferences
	// TODO: look to leverage or not
	frequency?: number;
	lastMatch?: Date;
	nextMatch?: Date;
}