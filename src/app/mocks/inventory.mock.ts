import { InventoryItemDto } from "../classes/inventory.class";

export class InventoryItemDtoDataMock {
    static init(): InventoryItemDto[] {
        return [
            new InventoryItemDto({
                id: 'towels',
                name: 'Towels',
                color: 'success',
                inCaravan: true,
                atAnja: false,
                atLoes: false,
            }),
            new InventoryItemDto({
                id: 'dishes',
                name: 'Dishes',
                color: 'success',
                inCaravan: true,
                atAnja: true,
                atLoes: true,
            }),
            new InventoryItemDto({
                id: 'tent',
                name: 'Tent',
                color: 'success',
                inCaravan: false,
                atAnja: true,
                atLoes: false,
            }),
            new InventoryItemDto({
                id: 'sleeping-bag-anja',
                name: 'Sleeping bag Anja',
                color: 'success',
                inCaravan: false,
                atAnja: true,
                atLoes: false,
            }),
            new InventoryItemDto({
                id: 'sleeping-bag-loes',
                name: 'Sleeping bag Loes',
                color: 'success',
                inCaravan: true,
                atAnja: false,
                atLoes: false,
            }),
            new InventoryItemDto({
                id: 'bed-cover',
                name: 'Bed cover',
                color: 'success',
                inCaravan: true,
                atAnja: false,
                atLoes: false,
            }),
        ]
    }
}