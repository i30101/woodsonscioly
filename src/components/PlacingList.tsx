/**
 * @author Andrew Kim
 * @version 3.0.0
 * @since 28 May 2025
 */


// external libraries
import React, {ReactNode} from 'react'


// components
import Rankings from './Rankings'


interface TabList {
    year: number;
    titles: ReactNode[];
    first: ReactNode;
}


const PlacingList: React.FC<TabList> = ({year, titles, first}) => {
    const tabIDs = titles.map((_, index) => (
        "tab" + year + "-" + index
    ));

    const contentIDs = titles.map((_, index) => (
        "content" + year + "-" + index
    ));

    const contents: ReactNode[] = titles.map((_, index) => (
        <Rankings year={year} compIndex={index} />
    ));

    return <div className="placing-list">
        <ul className="nav nav-tabs" role="tablist">
            {
                titles.map((item, index) => (
                    <li key={"nav" + index} className="nav-item" role="presentation">
                        {(index === 0) ?
                            (
                                <button
                                    className="nav-link tablist-link link active"
                                    id={tabIDs[index]}
                                    data-bs-toggle="tab"
                                    data-bs-target={"#" + contentIDs[index]}
                                    type="button"
                                    role="tab"
                                    aria-controls={contentIDs[index]}
                                    aria-selected="true"
                                >
                                    {item}
                                </button>
                            ) :
                            (
                                <button
                                    className="nav-link tablist-link link"
                                    id={tabIDs[index]}
                                    data-bs-toggle="tab"
                                    data-bs-target={"#" + contentIDs[index]}
                                    type="button"
                                    role="tab"
                                    aria-controls={contentIDs[index]}
                                    aria-selected="false"
                                >
                                    {item}
                                </button>
                            )
                        }
                    </li>
                ))
            }
        </ul>
        <div className="tab-content">
            {
                contentIDs.map((item, index) => (
                    (index === 0) ?
                        <div className="tab-pane show active" id={item} role="tabpanel" aria-labelledby={tabIDs[index]}>
                            {first}
                        </div>
                        :
                        <div className="tab-pane fade" id={item} role="tabpanel" aria-labelledby={tabIDs[index]}>
                            {contents[index - 1]}
                        </div>
                ))
            }
        </div>
    </div>;
}


export default PlacingList;