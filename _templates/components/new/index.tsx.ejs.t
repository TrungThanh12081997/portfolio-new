---
to: src/components/<%= level %>/<%= h.toPascalCase(name) %>/index.tsx
---
import React from "react";
import './index.scss';

interface <%= h.toPascalCase(name) %>Props {}

const <%= h.toPascalCase(name) %>: React.FC<<%= h.toPascalCase(name) %>Props> = () => {
    return (
        <div>Component <%= h.toPascalCase(name) %> </div>
    )
};

export default <%= h.toPascalCase(name) %>;
