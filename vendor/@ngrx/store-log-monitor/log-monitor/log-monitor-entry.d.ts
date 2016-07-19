import { EventEmitter } from '@angular/core';
import { LogEntryItem } from './log-entry-item';
export declare class LogMonitorEntryComponent {
    private _item;
    private stateActionPair;
    expandEntries: boolean;
    disabled: boolean;
    item: LogEntryItem;
    toggle: EventEmitter<{}>;
    handleToggle(): void;
    logPayload(): void;
    logState(): void;
}
