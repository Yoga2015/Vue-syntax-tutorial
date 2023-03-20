{

  tag: 'div';
  props: {
    id:'app';
    className:'contianer'
  };
  children:[

    {
      tag: 'h1',
      children: '虚拟DOM'
    },

    {
      tag:'ul',
      props: { 
        style:'color:orange'
      },
      children:[
        {
          tag: 'li',
          children:'第1项'
        },
        {
          tag: 'li',
          children: '第2项'
        },
        {
          tag: 'li',
          children: '第3项'
        }
      ]
    },
    
  ]

}