import "./studies.styles.css";
import {
  approvedBackendCoursesPlatzi,
  approvedFrondCoursesPlatzi,
  approvedJavaScriptCoursesPlatzi,
  approvedOthersCoursesPlatzi,
} from "../../utils/store";

const Studies = () => {
  return (
    <>
      <h2>Estudios</h2>
      <div className="studies-summary-container">
        <h3 className="studies-summary-title">Resumen</h3>
        <span>
          Graduado de Ingeniero en Ciencias Informáticas en la universidad
          “Máximo Gómez Báez” en el 2015. Ciego de Ávila. Cuba.
          <br />
          He tomado diferentes cursos gratis o de pagos con el fin de mejorar
          mis habilidades y aprender otras nuevas como desarrollador, una prueba
          de ello son los siguientes.
        </span>
      </div>
      <div className="studies-courses-container">
        <h4 className="studies-courses-title">Cursos aprobados en Platzi.</h4>
        <div className="courses-ul-container">
          <div className="fronted">
            <div className="ul-javascript">
              <div className="course-title">
                <p>JavaScript</p>
              </div>
              <hr className="divider" />
              <ul className="studies-ul">
                {approvedJavaScriptCoursesPlatzi.map((course) => (
                  <li key={course.id}>{course.name}</li>
                ))}
              </ul>
            </div>
            <div className="ul-frond">
              <div className="course-title">
                <p>Frontend</p>
              </div>
              <hr className="divider" />
              <ul className="studies-ul">
                {approvedFrondCoursesPlatzi.map((course) => (
                  <li key={course.id}>{course.name}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="ul-others">
            <div className="course-title">
              <p>Otros</p>
            </div>
            <hr className="divider" />
            <ul className="studies-ul">
              {approvedOthersCoursesPlatzi.map((course) => (
                <li key={course.id}>{course.name}</li>
              ))}
            </ul>
            <ul className="studies-ul">
              {approvedBackendCoursesPlatzi.map((course) => (
                <li key={course.id}>{course.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Studies;
