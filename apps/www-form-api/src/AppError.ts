export interface AppErrorArgs {
	message: string;
	status: number;
	shouldReport?: boolean;
	cause?: Error;
	tags?: Record<string, string>;
}

export interface AppErrorType extends Error {
	status: number;
	shouldReport: boolean;
	isAppError: boolean;
	tags?: Record<string, string>;
}

export class AppError extends Error implements AppErrorType {
	status: number;
	shouldReport: boolean;
	tags?: Record<string, string>;
	isAppError = true;

	static create(args: AppErrorArgs): AppError {
		const { message, status, shouldReport = false, cause, tags } = args;
		const error = new AppError(message, status, shouldReport, cause, tags);

		return error;
	}

	private constructor(
		message: string,
		status: number,
		shouldReport: boolean,
		cause?: Error,
		tags?: Record<string, string>,
	) {
		// @ts-ignore cause parameter might not be supported in all versions, but type-checking validates this.
		super(message, cause ? { cause } : undefined);

		Object.setPrototypeOf(this, new.target.prototype);

		this.status = status;
		this.shouldReport = shouldReport;
		this.tags = tags;
	}
}
