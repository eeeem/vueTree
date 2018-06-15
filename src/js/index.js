import Vue from 'vue';  
import tree from '../components/tree.vue'  
  
let data={  
        name:'一级',  
        children:{  
            A:{  
                name:'二级',  
                children:{  
                    a1:{  
                        name:'三级',  
                        children:{  
                            a11:{     
                                name:'四级',  
                                children:null  
                            },  
                            a12:{     
                                name:'四级',  
                                children:null  
                            }  
                        }  
                    },  
                    a2:{  
                        name:'三级',  
                        children:{  
                            b21:{     
                                name:'四级',  
                                children:null  
                            }  
                        }  
                    }  
                }  
            },  
           B:{  
                name:'二级',  
                children:{  
                    b1:{  
                        name:'三级',  
                        children:{  
                            b11:{     
                                name:'四级',  
                                children:null  
                            },  
                            b12:{     
                                name:'四级',  
                                children:null  
                            }  
                        }  
                    },  
                    b2:{  
                        name:'三级',  
                        children:{  
                            b21:{     
                                name:'四级',  
                                children:null  
                            }  
                        }  
                    }  
                }  
            }  
        }  
    }  
      

const app=new Vue({  
    el:"#app",  
    components:{  
        'tree':tree  
    },  
    data:{  
        treeList:data
    }  
})  