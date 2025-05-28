export class LoggingService {
  logStatusChange( status: string) {
    console.log(` Account status changed to ${status}`);
  }
}
