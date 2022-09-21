

function Tab({children, activeTab, setActiveTab}) {

    return(
        <div>
            <nav>
                {children.map((tab, index) => (
                    <button 
                    onClick={() => setActiveTab(index)}
                    className={activeTab === index ? 'bg-green-100' : 'bg-gray-100' } 
                    key={index}
                    >
                    {tab.props.title}
                </button>
                ))}
            </nav>
            {children[activeTab]}
        </div>
    )

}

//component içersinde component oluşturulabilir.

Tab.Panel = function({children}){
    return(
        <div>
            {children}
        </div>
    )
}

export default Tab

