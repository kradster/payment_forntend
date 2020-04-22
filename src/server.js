import {Server,Model} from 'miragejs'
export function makeServer({ environment = "test" } = {}) {
    let server = new Server({
      environment,
  
      models: {
        user: Model,
      },
  
      seeds(server) {
        server.create("user", { name: "Bob" })
        server.create("user", { name: "Alice" })
      },
  
      routes() {
        this.namespace = "api"
        this.get('deployContract', ()=> {
            return {
                "status": "success",
                "TransactionHash": "0x71be65b67d78499eb236b847822a9720856f15c6ec26eba8c21edec5d71184f7"
                }
            })
            this.get('getContractAddress',()=>{
                return {
                    "status": "success",
                    "ContractAddress": "0xE732BdcD2c959173c76ff05663e46087b9a6E3D1"
                }
            })
        
            this.get('signMessage',()=>{
                return {
                    "status": "success",
                    "Signature": "0x8dfd7963716f563bd73afb7a7fe82eef80e7f5976009d667705e49967f9736595cf6a1dd6087b25dd6c0493e04b25128f9ad841b0c9e42baa0cf84737f74aae01b"
                }
            })
        
            this.get('claimPayment',()=>{
                return {
                    "status": "success",
                    "TransactionHash": "0x71be65b67d78499eb236b847822a9720856f15c6ec26eba8c21edec5d71184f7"
                }
            })
        
            this.get('getContractOwner',()=>{
                return {
                    "status": "success",
                    "data": {
                        "Address": "0xF1638221192ebeB5B423ECC984cE737e44FB1a97"
                    }
                }
            })
        
            this.get('getBalance',()=>{
                return {
                    "status": "success",
                    "data": {
                        "Balance": "0.000000001 ETH"
                    }
                }
            },{ timing: 4000 })
        
            this.get('getTimeout',()=>{
                return {
                    "status": "success",
                    "data": {
                        "Time ": "1586957236"
                    }
                }
            })
            
            this.get('destroyContract',()=>{
                return   {
                    "status": "success",
                    "TransactionHash": "0x71be65b67d78499eb236b847822a9720856f15c6ec26eba8c21edec5d71184f7"
                }
            })
        
        
      },
    })
  
    return server
  }
  


    