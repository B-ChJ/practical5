/*값 가져오기*/
function getMenus() {
    return JSON.parse(localStorage.getItem('menus')) || [];
}
/*데이터 저장*/
function saveMenus(menus) {
    localStorage.setItem('menus', JSON.stringify(menus));
}
/*메뉴 추가 후 데이터 저장*/
function addMenu(menu) {
    const menus = getMenus();
    menus.push(menu);
    saveMenus(menus);
}
/*메뉴 수정 후 데이터 저장*/
function updateMenu(index, updatedMenu) {
    const menus = getMenus();
    menus[index] = updatedMenu;
    saveMenus(menus);
}
/*메뉴 삭제 후 데이터에 상태 저장*/
function deleteMenu(index) {
    const menus = getMenus();
    /*배열에서 해당 내용 1개 삭제*/
    menus.splice(index, 1);
    saveMenus(menus);
}