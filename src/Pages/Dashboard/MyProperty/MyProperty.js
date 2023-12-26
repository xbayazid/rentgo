import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import MyPropertyCard from '../../../components/MyPropertyCard/MyPropertyCard';
import Loader from '../../../components/Loader/Loader';
import toast from 'react-hot-toast';

const MyProperty = () => {
    const { user } = useContext(AuthContext);
    const [propertyId, setPropertyId] = useState('');
    const [action, setAction] = useState('');
    const [propertyName, setPropertyName] = useState('');

    const url = `http://localhost:5000/myProperty?email=${user?.email}`;

    const { data: properties = [], refetch, isLoading } = useQuery({
        queryKey: ['property'],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    const handleRole = () =>{
        const url = `http://localhost:5000/properties/update/${action}?id=${propertyId}`;
        fetch(url, {
                method: 'PUT',
                headers: {
                    "content-type": "application/json"
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.acknowledged){
                        refetch();
                        closeModal('action-modal');
                        toast.success((action === 'hide'? 'Property Hide Successfully!!' : 'Property Active Successfully!!'));
                    }
                })
    }

    const closeModal = (name) => {
        // Get the modal element
        const modal = document.getElementById(name);

        // Hide the modal
        modal.close();
    };

    if(isLoading){
        return <Loader/>
    }

    console.log(properties)
    return (
        <div>
            <div className="my-6 mx-8">
                <div className="grid gap-5 ">
                    {
                        properties.map((property) => 
                        <MyPropertyCard 
                            key={property._id} 
                            property={property}
                            setAction={setAction}
                            setPropertyId={setPropertyId}
                            setPropertyName={setPropertyName}
                        />)
                    }
                </div>
            </div>
            <dialog id="action-modal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                    </form>
                    <h2 className="text-2xl mt-10 text-center">You Really Want to {action === 'hide' ? 'Hide' : 'Active'} your property which name is "{propertyName}"</h2>
                    <div className='my-10 flex justify-end gap-5'>
                        <button className={`btn ${action === 'hide' ? 'btn-primary' : 'btn-success'}`} onClick={handleRole}>{action === 'hide' ? 'Hide' : 'Active'}</button>
                    </div>

                </div>
            </dialog>
        </div>
    );
};

export default MyProperty;