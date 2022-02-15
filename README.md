# Encryption application example using Node.js 


A practical example of encryption use is in the communication between two applications where the application A encrypts the data and sends this encrypted data to the application B, where this communication can be done by a database or by an HTTP request, and the application B decrypts the data for use. In this example, the access key must be in applications A and B.

There are two classes in the crypto module called [Cipher](https://nodejs.org/api/crypto.html#class-cipher) and [Decipher](https://nodejs.org/api/crypto.html#class-decipher) that we are going to use in the example.



[![Website](https://shields.braskam.com/v1/shields?name=website&format=rectangle&size=small&radius=5)](https://rodrigo.kamada.com.br)
[![LinkedIn](https://shields.braskam.com/v1/shields?name=linkedin&format=rectangle&size=small&radius=5)](https://www.linkedin.com/in/rodrigokamada)
[![Twitter](https://shields.braskam.com/v1/shields?name=twitter&format=rectangle&size=small&radius=5&socialAccount=rodrigokamada)](https://twitter.com/rodrigokamada)



## Prerequisites


Before you start, you need to install and configure the tools and services:

* [git](https://git-scm.com/)
* [Node.js and npm](https://nodejs.org/)
* IDE (e.g. [Visual Studio Code](https://code.visualstudio.com/))



## Getting started


**1.** Clone the repository.

```shell
git clone git@github.com:rodrigokamada/nodejs-encryption.git
```

**2.** Install the dependencies.

```shell
npm ci
```

**3.** Run the application.

```shell
npm start
```
