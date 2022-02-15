# Encryption application example using Node.js 


A practical example of encryption use is in the communication between two applications where the application A encrypts the data and sends this encrypted data to the application B, where this communication can be done by a database or by an HTTP request, and the application B decrypts the data for use. In this example, the access key must be in applications A and B.

There are two classes in the crypto module called [Cipher](https://nodejs.org/api/crypto.html#class-cipher) and [Decipher](https://nodejs.org/api/crypto.html#class-decipher) that we are going to use in the example.
