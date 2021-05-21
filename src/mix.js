import BackTop from "@/components/content/backTop/BackTop";


export const backTop = {
    components:{
        BackTop
    },
    data() {
        return {
            isBackTop: false,
        }
    },
    methods:{
        backClick() {
            this.$refs.scrollRef.scroll.scrollTo(0, 0, 500);
        },
        
    }
}