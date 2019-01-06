import React from "react";

const CategoryAdministration = () => {
    return(
  <section id='subSection--administrationID' className="group__subSection mainSection__group--administration">
    <h1 className="subSection__title group__title--administration">Zarząd</h1>
    <div className="group__subSection--administration">
        <div className="administration__person">
            <div className="administration__img">
            </div>
            <h1 className="administration__name">Oliwier Biernacki</h1>
            <p className="administration__position">Przewodniczący</p>
        </div>
        <div className="administration__person">
            <div className="administration__img"></div>
            <h1 className="administration__name">Agata Tokarek</h1>
            <p className="administration__position">Wiceprzewodnicząca</p>
        </div>
        <div className="administration__person">
            <div className="administration__img"></div>
            <h1 className="administration__name">Marta Kałużna</h1>
            <p className="administration__position">Członek zarządu</p>
        </div>
        <div className="administration__person">
            <div className="administration__img"></div>
            <h1 className="administration__name">Szymon Czop</h1>
            <p className="administration__position">Członek zarządu</p>
        </div>
    </div>
</section>
    )
}

export default CategoryAdministration;