import Card from "./Card";
function App() {
  let data=[
    {
      plan:"Free",
      price:"0",
      users:"Single user",
      isusers:true,
      storage:"5GB Storage",
      isstorage:true,
      publicProjects:"Unlimited Public Projects",
      ispublicProjects:true,
      community:"Community Access",
      iscommunity:true,
      privateProject:"Unlimited Private Projects",
      isprivateProject:false,
      phoneSupport:"Dedicated Phone Support",
      isphoneSupport:false,
      subdomain:"Free Subdomain",
      issubdomain:false,
      statusReport:"Monthly Status Reports",
      isstatusReport:false


  },
  {
    plan:"Plus",
    price:"9",
    users:"5 Users",
      isusers:true,
      storage:"50GB Storage",
      isstorage:true,
      publicProjects:"Unlimited Public Projects",
      ispublicProjects:true,
      community:"Community Access",
      iscommunity:true,
      privateProject:"Unlimited Private Projects",
      isprivateProject:true,
      phoneSupport:"Dedicated Phone Support",
      isphoneSupport:true,
      subdomain:"Free Subdomain",
      issubdomain:true,
      statusReport:"Monthly Status Reports",
      isstatusReport:false
  },
  {
    plan:"Pro",
    price:"49",
    users:"Unlimited Users",
      isusers:true,
      storage:"150GB Storage",
      isstorage:true,
      publicProjects:"Unlimited Public Projects",
      ispublicProjects:true,
      community:"Community Access",
      iscommunity:true,
      privateProject:"Unlimited Private Projects",
      isprivateProject:true,
      phoneSupport:"Dedicated Phone Support",
      isphoneSupport:true,
      subdomain:"Unlimited Free Subdomain",
      issubdomain:true,
      statusReport:"Monthly Status Reports",
      isstatusReport:true
  }
]
  return (
    <>
    <h1>Hi price tag</h1>
    <div><section className="pricing py-5">
  <div className="container">
    <div className="row">
<Card data={data[0]}/>
<Card data={data[1]}/>
<Card data={data[2]}/>
    
    </div>
  </div>
</section>
</div>
    </>
  );
}

export default App;
