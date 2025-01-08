import React, { useState } from 'react';

interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  position: string;
}

const Profile: React.FC = () => {
  const [user, setUser] = useState<UserProfile>({
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main Street, Cityville, Country',
    position: 'Software Engineer',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedUser(user);
  };

  const handleSave = () => {
    setUser(editedUser);
    setIsEditing(false);
    console.log('Profile updated:', editedUser);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  return (
    <div className='max-w-7xl mx-auto p-6 bg-white shadow-sm rounded-md'>
      <div className="space-y-4">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      {isEditing ? (
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={editedUser.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={editedUser.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={editedUser.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={editedUser.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              rows={3}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="position">
              Position
            </label>
            <input
              type="text"
              id="position"
              name="position"
              value={editedUser.position}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-500 text-white py-2 px-4 rounded"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Save
            </button>
          </div>
        </form>
      ) : (
        <div>
          <div className="mb-4">
            <strong>Name:</strong> {user.name}
          </div>
          <div className="mb-4">
            <strong>Email:</strong> {user.email}
          </div>
          <div className="mb-4">
            <strong>Phone:</strong> {user.phone}
          </div>
          <div className="mb-4">
            <strong>Address:</strong> {user.address}
          </div>
          <div className="mb-4">
            <strong>Position:</strong> {user.position}
          </div>
          <button
            onClick={handleEdit}
            className="bg-yellow-500 text-white py-2 px-4 rounded"
          >
            Edit Profile
          </button>
        </div>
      )}
    </div>
    </div>
  );
};

export default Profile;
