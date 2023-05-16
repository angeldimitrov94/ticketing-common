export enum OrderStatus {
    /**
     * Order was created, but ticket it is trying to order has not been reserved
     */
    Created = 'created',
    /**
     * 1) Ticket that order is trying to reserve has already been reserved 
     * 2) User has explicitly cancelled the order
     * 3) Order has expired before payment
     */
    Cancelled = 'cancelled',
    /**
     * Order has successfully claimed the ticket but has not paid yet
     */
    AwaitingPayment = 'awaiting:payment',
    /**
     * Order has successfully claimed the ticket and has already paid
     */
    Complete = 'complete'
}