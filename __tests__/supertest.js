const request = require('supertest');
const assert = require('assert');
const express = require('express');

const server = 'http://localhost:3000';

describe('Route integration for user login', () => {
  describe('/user/login', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => {
        return request(server)
              .get('/user/login')
              .expect('Content-Type', /json/)
              .expect(200);
      });
      describe('GET', () => {
        it('responds with a a vaild user when a valid email is give to the Db', () => {
          return request(server)
                .get('/user/login')
                .send({email: 'alex@test.com', password: 'alex123'})
                .expect('Content-Type', /json/)
                .expect(200)
                .then(response => {
                  expect(response.body.length === 0)
                  console.log('response-->', response.body.length)
                })
        })
        it('Database returns an empty array when a user is not found due to invalid email or password', () => {
          return request(server)
                 .get('/user/login')
                 .send({email: 'ale@test.com', password: 'alex123'})
                 .expect('Content-Type', /json/)
                 .expect(200)
                 .then(response => {
                   console.log(response.body)
                   expect(response.body.length === 0)
                });



        })
      })
    });
  });
  //describe('/user/cookie')
});