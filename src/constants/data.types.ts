export type BoardMember = {
    position: string;
    name: string;
};

export type PDFBucketInfo = {
    name: string;
    url: string;
};

export type SponsorItem = {
    name: string;
    url: string;
};

export type Product = {
    imageUrl: string;
    name: string;
    cashPrice: number;
    ePrice: number;
    sizeRange: string;
};

export type KeyValueDropdownItem = {
    key: string;
    value: string;
};

export type FormPlayerName = {
    fName: string;
    mName: string | null;
    lName: string;
};

export type Event = {
    title: string;
    startDate: string;
    endDate: string;
    isAllDay: Boolean;
    description: string;
    location: string;
}
