console.log('index')
export default {
    data() {
        return {
            dialogVisible: false
        };
    },
    methods: {
        onClick1(){
            this.dialogVisible=!this.dialogVisible
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
            .then(_ => {
                done();
            })
            .catch(_ => {});
        }
    }
}
