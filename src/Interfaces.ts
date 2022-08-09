export interface IEvent {
    kind: string;
    id: string;
    status: string;
    htmlLink: string;
    created: string;
    updated: string;
    summary: string;
    description: string;
    colorId: string;
    creator: {
        email: string;
        "self": boolean;
    },
    organizer: {
        email: string;
        self: boolean;
    },
    start: {
        dateTime: string;
        timeZone: string;
    },
    end: {
        dateTime: string;
        timeZone: string;
    }
}