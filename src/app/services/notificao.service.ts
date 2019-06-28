import { EventEmitter } from '@angular/core';

export class NotificacaoService {
  notifier = new EventEmitter<string>();

  notify(message: string) {
    this.notifier.emit(message);
  }
}
