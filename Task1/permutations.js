process.argv.length<3?process.exit(-1):s=process.argv;s.splice(0, 2);let r=[],j=[],b=[];s.map((i)=>{r.push([i.split('').sort().join(''),i])});r.sort();let c=r[0][0],v,x=0,y=0;for(v of r){v[0]==c?(b.push(v[1]),y++,c=v[0]):(y>x?x=y:0,y=1,b=[],b.push(v[1]),c=v[0]);y>x?j=b:0}j.map(t=>console.log(t))

