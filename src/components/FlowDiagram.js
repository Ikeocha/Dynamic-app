import React, { useCallback } from 'react';
import {ReactFlow, MiniMap, Controls, Background, Handle, Position } from '@xyflow/react';


const nodeStyle = {
  padding: '10px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  backgroundColor: '#f0f0f0',
  fontFamily: 'Arial, sans-serif',
  width: '200px',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)', 
};

const handleStyle = {
  background: '#333',
  width: '12px',
  height: '12px',
  borderRadius: '50%',
};

const subDiagramContainerStyle = {
  marginTop: '15px',
  border: '2px solid #ddd',
  borderRadius: '5px',
  padding: '10px',
  backgroundColor: '#fafafa',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)', 
  width: '180px',
  height: '150px', 
  overflow: 'hidden', 
};


const TextUpdaterNode = ({ data }) => {
  const onChange = useCallback((evt) => {
    console.log('Input value:', evt.target.value);
  }, []);

  return (
    <div style={nodeStyle}>
      <Handle type="target" position={Position.Top} style={handleStyle} />
      <div>
        <label htmlFor="text">Text:</label>
        <input
          id="text"
          name="text"
          onChange={onChange}
          className="nodrag"
          style={{ width: '100%', padding: '5px', boxSizing: 'border-box' }}
        />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" style={handleStyle} />
      <Handle type="source" position={Position.Bottom} id="b" style={handleStyle} />
      {data.subDiagrams && data.subDiagrams.map((subDiagram, index) => (
        <div key={index} style={subDiagramContainerStyle}>
          <ReactFlow elements={subDiagram.elements} nodeTypes={{ textUpdater: TextUpdaterNode }} style={{ height: '100%', width: '100%' }} />
        </div>
      ))}
    </div>
  );
};

const initialElements = [
  { 
    id: '1', 
    type: 'textUpdater', 
    data: { 
      label: 'Text Updater Node',
      subDiagrams: [
        {
          elements: [
            { id: 'sub1', data: { label: 'Sub Node 1' }, position: { x: 50, y: 50 } },
            { id: 'sub2', data: { label: 'Sub Node 2' }, position: { x: 150, y: 150 } },
            { id: 'sub-edge', source: 'sub1', target: 'sub2' },
          ],
        },
      ],
    }, 
    position: { x: 250, y: 0 }
  },
  { id: '2', data: { label: 'Another Node' }, position: { x: 100, y: 100 } },
  { id: '3', type: 'output', data: { label: 'End' }, position: { x: 250, y: 200 } },
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3' },
];

const Diagram = ({ elements = initialElements }) => {
  return (
    <div style={{ height: '600px', border: '2px solid #ddd', borderRadius: '10px', padding: '10px' }}>
      <ReactFlow
        elements={elements}
        nodeTypes={{ textUpdater: TextUpdaterNode }} // Register custom node type
      >
        <MiniMap />
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default Diagram;
