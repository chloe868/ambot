
export default{
    user : null,
    registeredUser:[],
    setUser(user){
        this.user=user
    },
    getUser(user){
        return this.user=user
    },
    register(email,password){
        this.registeredUser.push({
            email: email,
            password:password
        })
        Router.push('/login')
    },
    login(email,password){
        for(let i=0;i<this.registeredUser.length;i++){
            if(this.registeredUser[i].email===email && this.registeredUser[i].password==password){
                Router.push('/dashboard')
                return this.registeredUser[i]
            }
        }
        return null
    },
    logout(){
        this.user=null
        sessionStorage.clear();
        Router.push('/login')
    },
    update(){
        this.user = null
        Router.push('/editprofile')
    },
    save(){
        this.user = null
        Router.push('/profile')
    }


}