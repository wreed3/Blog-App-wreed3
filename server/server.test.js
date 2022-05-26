const request = require('supertest');
const { mockDB } = require('mysql');
const app = require('server/routes/server');

const data = {
    id: 32,
    title: 'testing',
    postText: 'See if this will work',
    userName: 'default'
};

describe('GET', () => {
    describe('/Posts', () =>{
        let actualSQL;

        beforeEach(() => {
            mockDB.query.mockImplementation((sql, callback) => {
                actualSQL = sql;
                callback(null, [data]);
            });
        });

        it('returns all the posts', async () =>{
            const res = await request(app).get('/Posts');

            expect(actualSQL).toEqual('SELECT * FROM blogPosts');
            expect(res.body).toEqual([data]);
        })
    })
})