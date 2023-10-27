import Navigation from "./Navigation";
import RoutePath from "../RoutePath";

const Container = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <Navigation/>
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <RoutePath/>
                    </main>
                </div>
            </div>
        </>
    );
};

export default Container;