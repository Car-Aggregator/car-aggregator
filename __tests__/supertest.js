const request = require('supertest');
const assert = require('assert');
const express = require('express');

const server = 'http://localhost:3000';

describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      it('responds with 200 status and text/html content type', () => {
        return request(server)
               .get('/')
              .expect('Content-Type', /text\/html/)
              .expect(200);
      });
    });
  });
});