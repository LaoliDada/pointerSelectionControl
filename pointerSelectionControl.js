export default {
    props:{
        type:{
            type:String,
            default:""
        },
        list:{
            default(){
                return [];
            }
        },
        num:{
            default:1
        },
        checked:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    data(){
        return {
            color:this.$store.state.siteConfig.siteSkin,
            checkedVal:"",
            flagList:[],
            theList:[]
        }
    },
    watch:{
        list(){
            this.flagList.length=this.list.length;
            this.flagList.fill(false);
            this.theList = [];
            this.list.forEach((i,n)=>{
                this.theList.push(i);
            })
            if(this.checked.value){
                let a = this.theList.findIndex((val)=>{
                    return val.value == this.checked.value;
                })
                this.checkedThisBox(this.checked,a)
            }
        }
    },
    mounted(){
        this.list.forEach((i,n)=>{
            this.theList.push(i);
        })
        if(this.checked.value){
            let a = this.theList.findIndex((val)=>{
                return val.value == this.checked.value;
            })
            this.checkedThisBox(this.checked,a)
        }
    },
    methods:{
        checkedThisBox(item,index){
            if(!this.flagList[index]){
                this.flagList = [];
                this.flagList.length=this.list.length;
                this.flagList.fill(false);
                this.$set(this.flagList,index,true);
                let emitObj = Object.assign({},item,{index:index});
                this.$emit("on-checked",emitObj);
            }
        }
    }
}