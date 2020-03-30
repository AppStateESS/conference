This directory is for online payment service information. Payment sites have their own API variable names for sending and posting information. In order to sync them with our system, you can create a service json file to identify them.

**send**:
Codes that will be sent on the forward to the payment site.


* name - Customer name
* email - Customer email
* street1 - Customer address line 1
* street2 - Customer address line 2
* city - Customer city
* state - Customer state
* zip - Customer zip
* country - Customer country code (https://www.iso.org/obp/ui/#search or search iso.org)
* transactionId - Your site's transaction id. Sent to service and stored with charge
* transactionIdDesc - Description printed on receipt for transactionId
* accountId - The identification code assigned to your site
* amount - Amount of charge
* validationSend - A unique id that validates the charge.
* successUrl - Url for link shown upon successful payment to return to your site.
* successUrlText - The text used for the success link.
* errorUrl - Url for link shown if there is a charge error.
* errorUrlText - The text used for the error link.
* cancelUrl - Url for link to allow payer to cancel charge.
* cancelUrlText - The text for the cancel link.

**post**:
Codes that will be received upon completion (successful or otherwise) of the transaction.

* validatePost - key that identifies the poster
* responseId - an id assigned to the transaction that accompanies the payment
* paymentStatus - result of transaction
* paymentAmount - amount processed
* payerName - Name on credit card
* receiptId - id code attached to the charge used by the gateway.
* cardType - name of card used
* lastFour - last four digits of card