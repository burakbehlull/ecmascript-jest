import { describe, test, expect } from '@jest/globals'
import { impact, checkIsAuth } from '../main.js'

describe('main concept', ()=> {
	test('multiplication function', ()=> {
		expect(impact()).toBe(25)
	})

	test('Is the user logged in?', ()=> {
		expect(checkIsAuth()).toBeTruthy()
	})
})