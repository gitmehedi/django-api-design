import Navigation from "./Navigation";
import RoutePath from "../RoutePath";

const Container = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <main className="col-md-12 ms-sm-auto col-lg-12 px-md-12">
                        <RoutePath/>
                    </main>
                </div>
            </div>
        </>
    );
};

export default Container;