import axios from 'axios';
import * as API from '../const'

export function getContractOwner(data){return axios.post(API.GET_CONTRACT_OWNER,data)}
export function signMessage(data){return axios.post(API.SIGN_MESSAGE,data)}
export function claimPayment(data){return axios.post(API.CLAIM_PAYMENT,data)}
export function getBalance(data){return axios.post(API.GET_BALANCE,data)}
export function destroy(data){return axios.post(API.DESTROY,data)}
export function deployContract(data){return axios.post(API.DEPLOY_CONTRACT,data)}
export function getContractAddress(data){return axios.post(API.GET_CONTRACT_ADDRESS,data)}
export function getTimeout(data){return axios.post(API.GET_TIMEOUT,data)}
