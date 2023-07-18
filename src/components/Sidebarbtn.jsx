const SidebarBtn = ({img, title}) =>{
    return (
        <button className="Sidebar__btn"> 
        <span className="img__icon">{img}</span><span>{title}</span>
      </button>  
    )
}

export default SidebarBtn; 