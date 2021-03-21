import { ChecklistItemDto } from "../classes/checklist.class";

export class ChecklistItemDtoDataMock {
    static init(): ChecklistItemDto[] {
        return [
            new ChecklistItemDto({
                id: 'gas',
                name: 'Gas closed?',
                done: false,
            }),
            new ChecklistItemDto({
                id: 'refrigerator',
                name: 'Refrigerator empty?',
                done: false,
            }),
            new ChecklistItemDto({
                id: 'food',
                name: 'No food left in cupboards?',
                done: true,
            }),
            new ChecklistItemDto({
                id: 'windows',
                name: 'Windows closed?',
                done: false,
            }),
            new ChecklistItemDto({
                id: 'roofwindow',
                name: 'Roofwindow on small gap?',
                done: false,
            }),
            new ChecklistItemDto({
                id: 'electricity',
                name: 'Electricity caravan off?',
                done: true,
            }),
        ]
    }
}