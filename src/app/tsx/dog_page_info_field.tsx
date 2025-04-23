"use client";

export default function DogPageInfoField({dog_object_value, title_value}) 
{
    return (
        <div className="dog_info-field_encompasing-element">
           <p className="dog_info-field_header-element">{title_value}</p>
           <p className="dog_info-field_value-element">{dog_object_value}</p>
        </div>
    );
}