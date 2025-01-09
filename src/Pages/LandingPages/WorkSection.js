import React from 'react'
import { constants } from '../../Constant/constants'

const WorkSection = () => {
    const { images } = constants;
  return (
    <section className="work">
    <div className="work-pulse">
        <img src={images.timeImage.imageURL} alt={images.timeImage.alt} />
    </div>
    <div className="work-in-box">
        <div className="work-heading"><button className="work-heading-text">WORK PROCESS<span className="work-span-circle"></span></button></div>
        <h1 className="work-h1">Follow 3 Easy Work Steps</h1>
        <div className="work-in-box-wraper">
            <div className="work-box-down-box">
                <div className="work-box-up-box">
                    <div className="work-box-up-box-i">
                        <i className="fa-solid fa-laptop-code"></i>
                    </div>
                     <h1 className="work-box-h1">Project Processing</h1>
                     <p className="work-box-up-box-p">It is a long established fact that a reader will be
                         distracted by the readable content of a page when looking at its layout.</p>
                </div>
            </div>

            <div className="work-box-down-box">
                <div className="work-box-up-box">
                    <div className="work-box-up-box-i">
                        <i className="fa-solid fa-bullhorn"></i>
                    </div>
                     <h1 className="work-box-h1">High Quality Products</h1>
                     <p className="work-box-up-box-p">It is a long established fact that a reader will be
                         distracted by the readable content of a page when looking at its layout.</p>
                </div>
            </div>

            <div className="work-box-down-box-parent">
            <div className="work-box-down-box">
                <div className="work-box-up-box">
                    <div className="work-box-up-box-i">
                        <i className="fa-solid fa-fill-drip"></i>
                    </div>
                     <h1 className="work-box-h1">Quality Finished</h1>
                     <p className="work-box-up-box-p">It is a long established fact that a reader will be
                         distracted by the readable content of a page when looking at its layout.</p>
                </div>
            </div>
          </div>

        </div>
    </div>
</section>
  )
}

export default WorkSection