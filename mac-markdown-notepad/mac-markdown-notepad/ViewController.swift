//
//  ViewController.swift
//  mac-markdown-notepad
//
//  Created by Chen, Ching Hsuan on 11/24/17.
//  Copyright © 2017 Hyper Yolo. All rights reserved.
//

import Cocoa

class ViewController: NSViewController {
    @IBOutlet weak var nameField: NSTextField!
    @IBOutlet weak var helloLabel: NSTextField!

    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }

    override var representedObject: Any? {
        didSet {
        // Update the view, if already loaded.
        }
    }

    @IBAction func sayButtonClicked(_ sender: Any) {
        var name = nameField.stringValue
        if name.isEmpty {
            name = "Amie"
        }
        let greeting = "hi \(name)!"
        helloLabel.stringValue = greeting
    }
}

