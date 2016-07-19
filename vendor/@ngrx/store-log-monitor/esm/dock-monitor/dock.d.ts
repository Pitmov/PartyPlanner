import { PositionsType } from './reducer';
export declare class DockComponent {
    position: PositionsType;
    size: number;
    visible: boolean;
    absoluteSize: string;
    restSize: string;
    leftPosition: string;
    rightPosition: string;
    topPosition: string;
    bottomPosition: string;
    calculatePosition(primary: PositionsType, secondary: PositionsType): string;
}
